use crate::entities::person::{
    person_client::PersonClient, 
    ReadPersonListByIdListRequest, 
    ReadPersonListByIdListResponse
};
use crate::utils::config::{CONFIG, is_containerized_mode};

lazy_static! {
    static ref CONNECTION_STRING: String = {
        match is_containerized_mode(){
            true=>format!("http://{}:{}", CONFIG.containerized.grpc.host, CONFIG.containerized.grpc.port),
            false=>format!("http://{}:{}", CONFIG.default.grpc.host, CONFIG.default.grpc.port),
        }
    };
}

pub async fn read_person_list_by_id_lists(
    id_list: Vec<i32>,
) -> Result<ReadPersonListByIdListResponse, Box<dyn std::error::Error>> {
    let mut client = PersonClient::connect(CONNECTION_STRING.to_owned()).await?;

    let request = tonic::Request::new(
        ReadPersonListByIdListRequest{
            id_list:id_list,
        }
    );


    Ok(client.read_person_list_by_id_list(request)
        .await?
        .into_inner()
    )
}
