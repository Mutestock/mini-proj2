/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './student.pb';
import { GRPC_STUDENT_CLIENT_SETTINGS } from './student.pbconf';
/**
 * Service client implementation for student.Student
 */
@Injectable({ providedIn: 'any' })
export class StudentClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /student.Student/CreateStudent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateStudentResponse>>
     */
    createStudent: (
      requestData: thisProto.CreateStudentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateStudentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/student.Student/CreateStudent',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateStudentRequest,
        responseClass: thisProto.CreateStudentResponse
      });
    },
    /**
     * Unary RPC for /student.Student/ReadStudent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ReadStudentResponse>>
     */
    readStudent: (
      requestData: thisProto.ReadStudentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ReadStudentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/student.Student/ReadStudent',
        requestData,
        requestMetadata,
        requestClass: thisProto.ReadStudentRequest,
        responseClass: thisProto.ReadStudentResponse
      });
    },
    /**
     * Unary RPC for /student.Student/UpdateStudent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateStudentResponse>>
     */
    updateStudent: (
      requestData: thisProto.UpdateStudentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateStudentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/student.Student/UpdateStudent',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateStudentRequest,
        responseClass: thisProto.UpdateStudentResponse
      });
    },
    /**
     * Unary RPC for /student.Student/DeleteStudent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteStudentResponse>>
     */
    deleteStudent: (
      requestData: thisProto.DeleteStudentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteStudentResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/student.Student/DeleteStudent',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteStudentRequest,
        responseClass: thisProto.DeleteStudentResponse
      });
    },
    /**
     * Unary RPC for /student.Student/ReadStudentList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ReadStudentListResponse>>
     */
    readStudentList: (
      requestData: thisProto.ReadStudentListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ReadStudentListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/student.Student/ReadStudentList',
        requestData,
        requestMetadata,
        requestClass: thisProto.ReadStudentListRequest,
        responseClass: thisProto.ReadStudentListResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_STUDENT_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('student.Student', settings);
  }

  /**
   * Unary RPC for /student.Student/CreateStudent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateStudentResponse>
   */
  createStudent(
    requestData: thisProto.CreateStudentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateStudentResponse> {
    return this.$raw
      .createStudent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /student.Student/ReadStudent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReadStudentResponse>
   */
  readStudent(
    requestData: thisProto.ReadStudentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ReadStudentResponse> {
    return this.$raw
      .readStudent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /student.Student/UpdateStudent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateStudentResponse>
   */
  updateStudent(
    requestData: thisProto.UpdateStudentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateStudentResponse> {
    return this.$raw
      .updateStudent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /student.Student/DeleteStudent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteStudentResponse>
   */
  deleteStudent(
    requestData: thisProto.DeleteStudentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteStudentResponse> {
    return this.$raw
      .deleteStudent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /student.Student/ReadStudentList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReadStudentListResponse>
   */
  readStudentList(
    requestData: thisProto.ReadStudentListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ReadStudentListResponse> {
    return this.$raw
      .readStudentList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
