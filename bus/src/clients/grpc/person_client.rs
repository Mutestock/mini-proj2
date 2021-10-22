use crate::entities::person::NewPerson;
use crate::entities::person::{
    person_client::PersonClient, CreatePersonRequest, CreatePersonResponse, DeletePersonRequest,
    DeletePersonResponse, ReadPersonListByIdListRequest, ReadPersonListByIdListResponse,
    ReadPersonListRequest, ReadPersonListResponse, ReadPersonRequest, ReadPersonResponse,
    UpdatePersonRequest, UpdatePersonResponse,
};
use crate::utils::config::{is_containerized_mode, CONFIG};

lazy_static! {
    static ref CONNECTION_STRING: String = {
        match is_containerized_mode() {
            true => format!(
                "http://{}:{}",
                CONFIG.containerized.grpc.host, CONFIG.containerized.grpc.port
            ),
            false => format!(
                "http://{}:{}",
                CONFIG.default.grpc.host, CONFIG.default.grpc.port
            ),
        }
    };
}

pub async fn read_person_list_by_id_lists(
    id_list: Vec<i32>,
) -> Result<ReadPersonListByIdListResponse, Box<dyn std::error::Error>> {
    let mut client = PersonClient::connect(CONNECTION_STRING.to_owned()).await?;

    let request = tonic::Request::new(ReadPersonListByIdListRequest { id_list: id_list });

    Ok(client
        .read_person_list_by_id_list(request)
        .await?
        .into_inner())
}

pub async fn create_person(
    person: NewPerson,
) -> Result<CreatePersonResponse, Box<dyn std::error::Error>> {
    let mut client = PersonClient::connect(CONNECTION_STRING.to_owned()).await?;
    let request = tonic::Request::new(CreatePersonRequest {
        first_name: person.first_name,
        last_name: person.last_name,
        phone_number: person.phone_number,
        email: person.email,
        role: person.role,
    });

    Ok(client.create_person(request).await?.into_inner())
}

pub async fn read_person(id: i32) -> Result<ReadPersonResponse, Box<dyn std::error::Error>> {
    let mut client = PersonClient::connect(CONNECTION_STRING.to_owned()).await?;

    let request = tonic::Request::new(ReadPersonRequest { id: id });

    Ok(client.read_person(request).await?.into_inner())
}

pub async fn update_person(
    id: i32,
    person: NewPerson,
) -> Result<UpdatePersonResponse, Box<dyn std::error::Error>> {
    let mut client = PersonClient::connect(CONNECTION_STRING.to_owned()).await?;

    let request = tonic::Request::new(UpdatePersonRequest {
        id: id,
        new_person: Some(CreatePersonRequest {
            first_name: person.first_name,
            last_name: person.last_name,
            phone_number: person.phone_number,
            email: person.email,
            role: person.role,
        }),
    });

    Ok(client.update_person(request).await?.into_inner())
}

pub async fn delete_person(id: i32) -> Result<DeletePersonResponse, Box<dyn std::error::Error>> {
    let mut client = PersonClient::connect(CONNECTION_STRING.to_owned()).await?;

    let request = tonic::Request::new(DeletePersonRequest { id: id });

    Ok(client.delete_person(request).await?.into_inner())
}

pub async fn read_person_list() -> Result<ReadPersonListResponse, Box<dyn std::error::Error>> {
    let mut client = PersonClient::connect(CONNECTION_STRING.to_owned()).await?;

    let request = tonic::Request::new(ReadPersonListRequest {});

    Ok(client.read_person_list(request).await?.into_inner())
}
