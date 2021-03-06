#![allow(dead_code, unused_imports)]

use crate::entities::person;
use crate::{connection::sqlite_connection::get_db_pool, entities::person::PersonConverter};
use serde_derive::{Deserialize, Serialize};

pub async fn create(
    request: person::CreatePersonRequest,
) -> anyhow::Result<person::CreatePersonResponse> {
    sqlx::query(
        r#"
        INSERT INTO people (first_name, last_name, phone_number, email, role)
        VALUES( $1, $2, $3, $4, $5 )
        "#,
    )
    .bind(request.first_name)
    .bind(request.last_name)
    .bind(request.phone_number)
    .bind(request.email)
    .bind(request.role)
    .execute(
        &get_db_pool()
            .await
            .expect("Create person connection failed"),
    )
    .await
    .expect("Could not create person");

    Ok(person::CreatePersonResponse {
        message: "201".to_owned(),
    })
}

pub async fn read(
    request: person::ReadPersonRequest,
) -> anyhow::Result<person::ReadPersonResponse> {
    let stud = sqlx::query_as::<_, person::PersonConverter>(
        r#"
        SELECT * FROM people WHERE id = $1
        "#,
    )
    .bind(request.id)
    .fetch_one(&get_db_pool().await.expect("Read person connection failed"))
    .await
    .expect("Could not read person");

    Ok(stud.to_read_response())
}

pub async fn update(
    request: person::UpdatePersonRequest,
) -> anyhow::Result<person::UpdatePersonResponse> {
    let update_person = request.new_person.expect("Error in person request object");

    sqlx::query(
        r#"
        UPDATE people SET (first_name, last_name, phone_number, email, role) = ( $1, $2, $3, $4, $5)
        WHERE ID = $5
        "#,
    )
    .bind(update_person.first_name)
    .bind(update_person.last_name)
    .bind(update_person.phone_number)
    .bind(update_person.email)
    .bind(update_person.role)
    .bind(request.id)
    .execute(
        &get_db_pool()
            .await
            .expect("Update person connection failed"),
    )
    .await
    .expect("Could not update person");

    Ok(person::UpdatePersonResponse {
        message: "204".to_owned(),
    })
}

pub async fn delete(
    request: person::DeletePersonRequest,
) -> anyhow::Result<person::DeletePersonResponse> {
    sqlx::query(
        r#"
        DELETE FROM people WHERE id = $1
        "#,
    )
    .bind(request.id)
    .execute(
        &get_db_pool()
            .await
            .expect("Delete person connection failed"),
    )
    .await
    .expect("Could not delete person");

    Ok(person::DeletePersonResponse {
        message: "200".to_owned(),
    })
}

pub async fn read_list(
    _request: person::ReadPersonListRequest,
) -> anyhow::Result<person::ReadPersonListResponse> {
    let people = sqlx::query_as::<_, PersonConverter>(
        r#"
        SELECT * FROM people
        "#,
    )
    .fetch_all(
        &get_db_pool()
            .await
            .expect("Read list person connection failed"),
    )
    .await
    .expect("Could not read list of people");

    Ok(PersonConverter::to_list_response(people))
}

fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}

pub async fn read_list_by_id_list(
    request: person::ReadPersonListByIdListRequest,
) -> anyhow::Result<person::ReadPersonListByIdListResponse> {
    let ppl = sqlx::query_as::<_, PersonConverter>(
        r#"
        SELECT * FROM people
        "#,
    )
    .fetch_all(
        &get_db_pool()
            .await
            .expect("Read list person connection failed"),
    )
    .await
    .expect("Could not read list of people");

    Ok(PersonConverter::to_list_from_id_response(
        ppl.into_iter()
            .filter(|stud| request.id_list.contains(&(stud.id as i32)))
            .collect(),
    ))
}

pub async fn read_person_list_by_role(
    request: person::ReadPersonListByRoleRequest,
) -> anyhow::Result<person::ReadPersonListByRoleResponse> {
    let ppl = sqlx::query_as::<_, PersonConverter>(
        r#"
        SELECT * FROM people
        WHERE role = $1
        "#,
    )
    .bind(request.role)
    .fetch_all(
        &get_db_pool()
            .await
            .expect("Read list person connection failed"),
    )
    .await
    .expect("Could not read list of people");

    Ok(PersonConverter::to_list_response_by_role(ppl))
}
