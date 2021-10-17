use crate::entities::person::{
    person_client::PersonClient, 
    ReadPersonListByIdListRequest, 
    ReadPersonListByIdListResponse
};
use crate::utils::config::CONFIG;

lazy_static! {
    static ref CONNECTION_STRING: String =
        format!("http://{}:{}", CONFIG.grpc.host, CONFIG.grpc.port);
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
