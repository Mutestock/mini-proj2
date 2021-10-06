from logic.protogen.outgoing import grade_out_pb2_grpc
from logic.protogen.outgoing import grade_out_pb2
from clients.rest import rest_grade
from entities.grade import Grade


class GradeServicer(grade_out_pb2_grpc.GradeOutServicer):

    def CreateGrade(self, request, context):
        return grade_out_pb2.CreateGradeResponse(msg=rest_grade.create_grade(Grade.from_request(request)))

    def ReadGrade(self, request, context):
        return grade_out_pb2.ReadGradeResponse(
            name=rest_grade.read_grade(request.id)["name"]
        )

    def UpdateGrade(self, request, context):
        return grade_out_pb2.UpdateGradeResponse(msg=rest_grade.update_grade(request.id, Grade.from_request(request)))

    def DeleteGrade(self, request, context):
        return grade_out_pb2.DeleteGradeResponse(msg=rest_grade.delete_grade(request.id))

    def ReadGradeList(self, request, context):
        print(rest_grade.read_list_grade()[0])
        return Grade.to_grpc_read_list_response(rest_grade.read_list_grade())
