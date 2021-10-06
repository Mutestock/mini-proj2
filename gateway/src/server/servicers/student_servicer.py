from logic.protogen.outgoing import student_out_pb2_grpc
from logic.protogen.outgoing import student_out_pb2
from clients.grpc import grpc_student
from entities.student import Student

class StudentServicer(student_out_pb2_grpc.StudentOutServicer):

    def CreateStudent(self, request, context):
        return student_out_pb2.CreateStudentResponse(grpc_student.create_student(Student.from_request(request)))
    
    def ReadStudent(self, request, context):
        return student_out_pb2.ReadStudentResponse(grpc_student.read_student(request.id))
    
    def UpdateStudent(self, request, context):
        return student_out_pb2.UpdateStudentResponse(grpc_student.update_student(request.id, Student.from_request(request)))
    
    def DeleteStudent(self, request, context):
        return student_out_pb2.DeleteStudentResponse(grpc_student.delete_student(request.id))
    
    def ReadStudentList(self, request, context):
        return student_out_pb2.ReadStudentListResponse(grpc_student.read_student_list())
    
    
    
    

