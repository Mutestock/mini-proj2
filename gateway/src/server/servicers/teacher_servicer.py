from logic.protogen.outgoing import teacher_out_pb2_grpc
from logic.protogen.outgoing import teacher_out_pb2
from clients.soap import soap_teacher
from entities.teacher import Teacher


class TeacherServicer(teacher_out_pb2_grpc.TeacherOutServicer):

    def CreateTeacher(self, request, context):
        return teacher_out_pb2.CreateTeacherResponse(soap_teacher.create_teacher(Teacher.from_request(request)))
    
    def ReadTeacher(self, request, context):
        return teacher_out_pb2.ReadTeacherResponse(soap_teacher.read_teacher(request.id))
    
    def UpdateTeacher(self, request, context):
        return teacher_out_pb2.UpdateTeacherResponse(soap_teacher.update_teacher(request.id, Teacher.from_request(request)))
    
    def DeleteTeacher(self, request, context):
        return teacher_out_pb2.DeleteTeacherResponse(soap_teacher.delete_teacher(request.id))
    
    def ReadTeacherList(self, request, context):
        return teacher_out_pb2.ReadTeacherListResponse(soap_teacher.read_list_teacher())
    
    
    
    

