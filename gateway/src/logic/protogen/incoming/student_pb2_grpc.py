# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from logic.protogen.incoming import student_pb2 as incoming_dot_student__pb2


class StudentStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.CreateStudent = channel.unary_unary(
                '/student.Student/CreateStudent',
                request_serializer=incoming_dot_student__pb2.CreateStudentRequest.SerializeToString,
                response_deserializer=incoming_dot_student__pb2.CreateStudentResponse.FromString,
                )
        self.ReadStudent = channel.unary_unary(
                '/student.Student/ReadStudent',
                request_serializer=incoming_dot_student__pb2.ReadStudentRequest.SerializeToString,
                response_deserializer=incoming_dot_student__pb2.ReadStudentResponse.FromString,
                )
        self.UpdateStudent = channel.unary_unary(
                '/student.Student/UpdateStudent',
                request_serializer=incoming_dot_student__pb2.UpdateStudentRequest.SerializeToString,
                response_deserializer=incoming_dot_student__pb2.UpdateStudentResponse.FromString,
                )
        self.DeleteStudent = channel.unary_unary(
                '/student.Student/DeleteStudent',
                request_serializer=incoming_dot_student__pb2.DeleteStudentRequest.SerializeToString,
                response_deserializer=incoming_dot_student__pb2.DeleteStudentResponse.FromString,
                )
        self.ReadStudentList = channel.unary_unary(
                '/student.Student/ReadStudentList',
                request_serializer=incoming_dot_student__pb2.ReadStudentListRequest.SerializeToString,
                response_deserializer=incoming_dot_student__pb2.ReadStudentListResponse.FromString,
                )


class StudentServicer(object):
    """Missing associated documentation comment in .proto file."""

    def CreateStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ReadStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteStudent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ReadStudentList(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_StudentServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'CreateStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateStudent,
                    request_deserializer=incoming_dot_student__pb2.CreateStudentRequest.FromString,
                    response_serializer=incoming_dot_student__pb2.CreateStudentResponse.SerializeToString,
            ),
            'ReadStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadStudent,
                    request_deserializer=incoming_dot_student__pb2.ReadStudentRequest.FromString,
                    response_serializer=incoming_dot_student__pb2.ReadStudentResponse.SerializeToString,
            ),
            'UpdateStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateStudent,
                    request_deserializer=incoming_dot_student__pb2.UpdateStudentRequest.FromString,
                    response_serializer=incoming_dot_student__pb2.UpdateStudentResponse.SerializeToString,
            ),
            'DeleteStudent': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteStudent,
                    request_deserializer=incoming_dot_student__pb2.DeleteStudentRequest.FromString,
                    response_serializer=incoming_dot_student__pb2.DeleteStudentResponse.SerializeToString,
            ),
            'ReadStudentList': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadStudentList,
                    request_deserializer=incoming_dot_student__pb2.ReadStudentListRequest.FromString,
                    response_serializer=incoming_dot_student__pb2.ReadStudentListResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'student.Student', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Student(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def CreateStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/student.Student/CreateStudent',
            incoming_dot_student__pb2.CreateStudentRequest.SerializeToString,
            incoming_dot_student__pb2.CreateStudentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ReadStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/student.Student/ReadStudent',
            incoming_dot_student__pb2.ReadStudentRequest.SerializeToString,
            incoming_dot_student__pb2.ReadStudentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/student.Student/UpdateStudent',
            incoming_dot_student__pb2.UpdateStudentRequest.SerializeToString,
            incoming_dot_student__pb2.UpdateStudentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteStudent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/student.Student/DeleteStudent',
            incoming_dot_student__pb2.DeleteStudentRequest.SerializeToString,
            incoming_dot_student__pb2.DeleteStudentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ReadStudentList(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/student.Student/ReadStudentList',
            incoming_dot_student__pb2.ReadStudentListRequest.SerializeToString,
            incoming_dot_student__pb2.ReadStudentListResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
