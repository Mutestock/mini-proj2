from clients.rest.rest_exam import create_exam, read_exam, update_exam, delete_exam, read_list_exam
from entities.exam import Exam
from server_config import app

# https://stackoverflow.com/questions/32615167/restful-design-in-pyramid-view-configuration


@app.route('/exam', method="POST")
def create(self):
    create_exam(Exam.from_request(self.request))
    return Response("200")


@app.route('/exam', method="GET")
def read_list(self):
    print("boop")
    return Response(self.request.POST)


@app.route('/exam/<int:id>', method="PUT")
def update(self):
    update_exam(Exam.from_request(self.request.POST.get(
        "id"), Exam.from_request(self.request)))
    return Response("200")


@app.route('/exam/<int:id>', method="DELETE")
def delete(self):
    delete_exam(self.request.POST.get("id"))
    return Response("200")


@app.route('/exam/<int:id>', method="GET")
def read(self):
    delete_exam(self.request.POST.get("id"))
    return Response("200")



