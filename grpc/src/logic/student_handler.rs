#![allow(dead_code, unused_imports)]

use crate::entities::student;
use crate::{connection::pg_connection::get_pg_pool, entities::student::StudentConverter};
use serde_derive::{Deserialize, Serialize};

pub async fn create(
    request: student::CreateStudentRequest,
) -> anyhow::Result<student::CreateStudentResponse> {
    sqlx::query(
        r#"
        INSERT INTO students (first_name, last_name, phone_number, email)
        VALUES( $1, $2, $3, $4 )
        "#,
    )
    .bind(request.first_name)
    .bind(request.last_name)
    .bind(request.phone_number)
    .bind(request.email)
    .execute(
        &get_pg_pool()
            .await
            .expect("Create student connection failed"),
    )
    .await
    .expect("Could not create student");

    Ok(student::CreateStudentResponse {
        message: "201".to_owned(),
    })
}

pub async fn read(
    request: student::ReadStudentRequest,
) -> anyhow::Result<student::ReadStudentResponse> {
    let stud = sqlx::query_as::<_, student::StudentConverter>(
        r#"
        SELECT * FROM students WHERE id = $1
        "#,
    )
    .bind(request.id)
    .fetch_one(
        &get_pg_pool()
        .await
        .expect("Read student connection failed")
    )
    .await
    .expect("Could not read student");

    Ok(stud.to_read_response())
}

pub async fn update(
    request: student::UpdateStudentRequest,
) -> anyhow::Result<student::UpdateStudentResponse> {
    let update_student = request
        .new_student
        .expect("Error in student request object");

    sqlx::query(
        r#"
        UPDATE students SET (first_name, last_name, phone_number, email) = ( $1, $2, $3, $4)
        WHERE ID = $5
        "#,
    )
    .bind(update_student.first_name)
    .bind(update_student.last_name)
    .bind(update_student.phone_number)
    .bind(update_student.email)
    .bind(request.id)
    .execute(
        &get_pg_pool()
            .await
            .expect("Update student connection failed"),
    )
    .await
    .expect("Could not update student");

    Ok(student::UpdateStudentResponse {
        message: "204".to_owned(),
    })
}

pub async fn delete(
    request: student::DeleteStudentRequest,
) -> anyhow::Result<student::DeleteStudentResponse> {
    sqlx::query(
        r#"
        DELETE FROM students WHERE id = $1
        "#,
    )
    .bind(request.id)
    .execute(
        &get_pg_pool()
            .await
            .expect("Delete student connection failed"),
    )
    .await
    .expect("Could not delete student");

    Ok(student::DeleteStudentResponse {
        message: "200".to_owned(),
    })
}

pub async fn read_list(
    _request: student::ReadStudentListRequest,
) -> anyhow::Result<student::ReadStudentListResponse> {
    let students = sqlx::query_as::<_, StudentConverter>(
        r#"
        SELECT * FROM students
        "#,
    )
    .fetch_all(
        &get_pg_pool()
            .await
            .expect("Read list student connection failed"),
    )
    .await
    .expect("Could not read list of students");

    Ok(StudentConverter::to_list_response(students))
}
