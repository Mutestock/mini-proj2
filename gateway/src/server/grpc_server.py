from server.servicers.grade_servicer import GradeServicer
from server.servicers.student_servicer import StudentServicer
from server.servicers.teacher_servicer import TeacherServicer
from logic.protogen.outgoing import grade_out_pb2_grpc, student_out_pb2_grpc, teacher_out_pb2_grpc
from concurrent import futures
import grpc
from utils.config import CONFIG

_URL = f"{CONFIG['server']['host']}:{CONFIG['server']['port']}"

def serve() -> None:
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
    teacher_out_pb2_grpc.add_TeacherOutServicer_to_server(TeacherServicer(), server)
    grade_out_pb2_grpc.add_GradeOutServicer_to_server(GradeServicer(), server)
    student_out_pb2_grpc.add_StudentOutServicer_to_server(StudentServicer(), server)
    server.add_insecure_port(_URL)
    server.start()
    print("Gateway starting at: " + _URL)
    server.wait_for_termination()
    
    


