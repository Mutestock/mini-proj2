/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for student.CreateStudentRequest
 */
export class CreateStudentRequest implements GrpcMessage {
  static id = 'student.CreateStudentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateStudentRequest();
    CreateStudentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateStudentRequest) {
    _instance.firstName = _instance.firstName || '';
    _instance.lastName = _instance.lastName || '';
    _instance.phoneNumber = _instance.phoneNumber || '';
    _instance.email = _instance.email || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateStudentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.firstName = _reader.readString();
          break;
        case 2:
          _instance.lastName = _reader.readString();
          break;
        case 3:
          _instance.phoneNumber = _reader.readString();
          break;
        case 4:
          _instance.email = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateStudentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateStudentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.firstName) {
      _writer.writeString(1, _instance.firstName);
    }
    if (_instance.lastName) {
      _writer.writeString(2, _instance.lastName);
    }
    if (_instance.phoneNumber) {
      _writer.writeString(3, _instance.phoneNumber);
    }
    if (_instance.email) {
      _writer.writeString(4, _instance.email);
    }
  }

  private _firstName?: string;
  private _lastName?: string;
  private _phoneNumber?: string;
  private _email?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateStudentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateStudentRequest.AsObject>) {
    _value = _value || {};
    this.firstName = _value.firstName;
    this.lastName = _value.lastName;
    this.phoneNumber = _value.phoneNumber;
    this.email = _value.email;
    CreateStudentRequest.refineValues(this);
  }
  get firstName(): string | undefined {
    return this._firstName;
  }
  set firstName(value: string | undefined) {
    this._firstName = value;
  }
  get lastName(): string | undefined {
    return this._lastName;
  }
  set lastName(value: string | undefined) {
    this._lastName = value;
  }
  get phoneNumber(): string | undefined {
    return this._phoneNumber;
  }
  set phoneNumber(value: string | undefined) {
    this._phoneNumber = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateStudentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateStudentRequest.AsObject {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateStudentRequest.AsProtobufJSON {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email
    };
  }
}
export module CreateStudentRequest {
  /**
   * Standard JavaScript object representation for CreateStudentRequest
   */
  export interface AsObject {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
  }

  /**
   * Protobuf JSON representation for CreateStudentRequest
   */
  export interface AsProtobufJSON {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
  }
}

/**
 * Message implementation for student.ReadStudentResponse
 */
export class ReadStudentResponse implements GrpcMessage {
  static id = 'student.ReadStudentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadStudentResponse();
    ReadStudentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadStudentResponse) {
    _instance.id = _instance.id || 0;
    _instance.firstName = _instance.firstName || '';
    _instance.lastName = _instance.lastName || '';
    _instance.phoneNumber = _instance.phoneNumber || '';
    _instance.email = _instance.email || '';
    _instance.updatedAt = _instance.updatedAt || '';
    _instance.createdAt = _instance.createdAt || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadStudentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.firstName = _reader.readString();
          break;
        case 3:
          _instance.lastName = _reader.readString();
          break;
        case 4:
          _instance.phoneNumber = _reader.readString();
          break;
        case 5:
          _instance.email = _reader.readString();
          break;
        case 6:
          _instance.updatedAt = _reader.readString();
          break;
        case 7:
          _instance.createdAt = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ReadStudentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadStudentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.firstName) {
      _writer.writeString(2, _instance.firstName);
    }
    if (_instance.lastName) {
      _writer.writeString(3, _instance.lastName);
    }
    if (_instance.phoneNumber) {
      _writer.writeString(4, _instance.phoneNumber);
    }
    if (_instance.email) {
      _writer.writeString(5, _instance.email);
    }
    if (_instance.updatedAt) {
      _writer.writeString(6, _instance.updatedAt);
    }
    if (_instance.createdAt) {
      _writer.writeString(7, _instance.createdAt);
    }
  }

  private _id?: number;
  private _firstName?: string;
  private _lastName?: string;
  private _phoneNumber?: string;
  private _email?: string;
  private _updatedAt?: string;
  private _createdAt?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadStudentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadStudentResponse.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.firstName = _value.firstName;
    this.lastName = _value.lastName;
    this.phoneNumber = _value.phoneNumber;
    this.email = _value.email;
    this.updatedAt = _value.updatedAt;
    this.createdAt = _value.createdAt;
    ReadStudentResponse.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get firstName(): string | undefined {
    return this._firstName;
  }
  set firstName(value: string | undefined) {
    this._firstName = value;
  }
  get lastName(): string | undefined {
    return this._lastName;
  }
  set lastName(value: string | undefined) {
    this._lastName = value;
  }
  get phoneNumber(): string | undefined {
    return this._phoneNumber;
  }
  set phoneNumber(value: string | undefined) {
    this._phoneNumber = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get updatedAt(): string | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: string | undefined) {
    this._updatedAt = value;
  }
  get createdAt(): string | undefined {
    return this._createdAt;
  }
  set createdAt(value: string | undefined) {
    this._createdAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadStudentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadStudentResponse.AsObject {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ReadStudentResponse.AsProtobufJSON {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt
    };
  }
}
export module ReadStudentResponse {
  /**
   * Standard JavaScript object representation for ReadStudentResponse
   */
  export interface AsObject {
    id?: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    updatedAt?: string;
    createdAt?: string;
  }

  /**
   * Protobuf JSON representation for ReadStudentResponse
   */
  export interface AsProtobufJSON {
    id?: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    updatedAt?: string;
    createdAt?: string;
  }
}

/**
 * Message implementation for student.UpdateStudentRequest
 */
export class UpdateStudentRequest implements GrpcMessage {
  static id = 'student.UpdateStudentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateStudentRequest();
    UpdateStudentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateStudentRequest) {
    _instance.id = _instance.id || 0;
    _instance.newStudent = _instance.newStudent || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateStudentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.newStudent = new CreateStudentRequest();
          _reader.readMessage(
            _instance.newStudent,
            CreateStudentRequest.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateStudentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateStudentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.newStudent) {
      _writer.writeMessage(
        2,
        _instance.newStudent as any,
        CreateStudentRequest.serializeBinaryToWriter
      );
    }
  }

  private _id?: number;
  private _newStudent?: CreateStudentRequest;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateStudentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateStudentRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.newStudent = _value.newStudent
      ? new CreateStudentRequest(_value.newStudent)
      : undefined;
    UpdateStudentRequest.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get newStudent(): CreateStudentRequest | undefined {
    return this._newStudent;
  }
  set newStudent(value: CreateStudentRequest | undefined) {
    this._newStudent = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateStudentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateStudentRequest.AsObject {
    return {
      id: this.id,
      newStudent: this.newStudent ? this.newStudent.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateStudentRequest.AsProtobufJSON {
    return {
      id: this.id,
      newStudent: this.newStudent
        ? this.newStudent.toProtobufJSON(options)
        : null
    };
  }
}
export module UpdateStudentRequest {
  /**
   * Standard JavaScript object representation for UpdateStudentRequest
   */
  export interface AsObject {
    id?: number;
    newStudent?: CreateStudentRequest.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateStudentRequest
   */
  export interface AsProtobufJSON {
    id?: number;
    newStudent?: CreateStudentRequest.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for student.DeleteStudentRequest
 */
export class DeleteStudentRequest implements GrpcMessage {
  static id = 'student.DeleteStudentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteStudentRequest();
    DeleteStudentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteStudentRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteStudentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteStudentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteStudentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteStudentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteStudentRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteStudentRequest.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteStudentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteStudentRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteStudentRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteStudentRequest {
  /**
   * Standard JavaScript object representation for DeleteStudentRequest
   */
  export interface AsObject {
    id?: number;
  }

  /**
   * Protobuf JSON representation for DeleteStudentRequest
   */
  export interface AsProtobufJSON {
    id?: number;
  }
}

/**
 * Message implementation for student.ReadStudentRequest
 */
export class ReadStudentRequest implements GrpcMessage {
  static id = 'student.ReadStudentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadStudentRequest();
    ReadStudentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadStudentRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadStudentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ReadStudentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadStudentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadStudentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadStudentRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    ReadStudentRequest.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadStudentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadStudentRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ReadStudentRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module ReadStudentRequest {
  /**
   * Standard JavaScript object representation for ReadStudentRequest
   */
  export interface AsObject {
    id?: number;
  }

  /**
   * Protobuf JSON representation for ReadStudentRequest
   */
  export interface AsProtobufJSON {
    id?: number;
  }
}

/**
 * Message implementation for student.ReadStudentListRequest
 */
export class ReadStudentListRequest implements GrpcMessage {
  static id = 'student.ReadStudentListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadStudentListRequest();
    ReadStudentListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadStudentListRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadStudentListRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    ReadStudentListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadStudentListRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadStudentListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadStudentListRequest.AsObject>) {
    _value = _value || {};
    ReadStudentListRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadStudentListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadStudentListRequest.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ReadStudentListRequest.AsProtobufJSON {
    return {};
  }
}
export module ReadStudentListRequest {
  /**
   * Standard JavaScript object representation for ReadStudentListRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for ReadStudentListRequest
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for student.CreateStudentResponse
 */
export class CreateStudentResponse implements GrpcMessage {
  static id = 'student.CreateStudentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateStudentResponse();
    CreateStudentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateStudentResponse) {
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateStudentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateStudentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateStudentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.message) {
      _writer.writeString(1, _instance.message);
    }
  }

  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateStudentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateStudentResponse.AsObject>) {
    _value = _value || {};
    this.message = _value.message;
    CreateStudentResponse.refineValues(this);
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateStudentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateStudentResponse.AsObject {
    return {
      message: this.message
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateStudentResponse.AsProtobufJSON {
    return {
      message: this.message
    };
  }
}
export module CreateStudentResponse {
  /**
   * Standard JavaScript object representation for CreateStudentResponse
   */
  export interface AsObject {
    message?: string;
  }

  /**
   * Protobuf JSON representation for CreateStudentResponse
   */
  export interface AsProtobufJSON {
    message?: string;
  }
}

/**
 * Message implementation for student.ReadStudentListResponse
 */
export class ReadStudentListResponse implements GrpcMessage {
  static id = 'student.ReadStudentListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadStudentListResponse();
    ReadStudentListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadStudentListResponse) {
    _instance.studentList = _instance.studentList || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadStudentListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ReadStudentResponse();
          _reader.readMessage(
            messageInitializer1,
            ReadStudentResponse.deserializeBinaryFromReader
          );
          (_instance.studentList = _instance.studentList || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ReadStudentListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadStudentListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.studentList && _instance.studentList.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.studentList as any,
        ReadStudentResponse.serializeBinaryToWriter
      );
    }
  }

  private _studentList?: ReadStudentResponse[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadStudentListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadStudentListResponse.AsObject>) {
    _value = _value || {};
    this.studentList = (_value.studentList || []).map(
      m => new ReadStudentResponse(m)
    );
    ReadStudentListResponse.refineValues(this);
  }
  get studentList(): ReadStudentResponse[] | undefined {
    return this._studentList;
  }
  set studentList(value: ReadStudentResponse[] | undefined) {
    this._studentList = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadStudentListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadStudentListResponse.AsObject {
    return {
      studentList: (this.studentList || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ReadStudentListResponse.AsProtobufJSON {
    return {
      studentList: (this.studentList || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ReadStudentListResponse {
  /**
   * Standard JavaScript object representation for ReadStudentListResponse
   */
  export interface AsObject {
    studentList?: ReadStudentResponse.AsObject[];
  }

  /**
   * Protobuf JSON representation for ReadStudentListResponse
   */
  export interface AsProtobufJSON {
    studentList?: ReadStudentResponse.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for student.UpdateStudentResponse
 */
export class UpdateStudentResponse implements GrpcMessage {
  static id = 'student.UpdateStudentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateStudentResponse();
    UpdateStudentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateStudentResponse) {
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateStudentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateStudentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateStudentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.message) {
      _writer.writeString(1, _instance.message);
    }
  }

  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateStudentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateStudentResponse.AsObject>) {
    _value = _value || {};
    this.message = _value.message;
    UpdateStudentResponse.refineValues(this);
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateStudentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateStudentResponse.AsObject {
    return {
      message: this.message
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateStudentResponse.AsProtobufJSON {
    return {
      message: this.message
    };
  }
}
export module UpdateStudentResponse {
  /**
   * Standard JavaScript object representation for UpdateStudentResponse
   */
  export interface AsObject {
    message?: string;
  }

  /**
   * Protobuf JSON representation for UpdateStudentResponse
   */
  export interface AsProtobufJSON {
    message?: string;
  }
}

/**
 * Message implementation for student.DeleteStudentResponse
 */
export class DeleteStudentResponse implements GrpcMessage {
  static id = 'student.DeleteStudentResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteStudentResponse();
    DeleteStudentResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteStudentResponse) {
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteStudentResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteStudentResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteStudentResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.message) {
      _writer.writeString(1, _instance.message);
    }
  }

  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteStudentResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteStudentResponse.AsObject>) {
    _value = _value || {};
    this.message = _value.message;
    DeleteStudentResponse.refineValues(this);
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteStudentResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteStudentResponse.AsObject {
    return {
      message: this.message
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteStudentResponse.AsProtobufJSON {
    return {
      message: this.message
    };
  }
}
export module DeleteStudentResponse {
  /**
   * Standard JavaScript object representation for DeleteStudentResponse
   */
  export interface AsObject {
    message?: string;
  }

  /**
   * Protobuf JSON representation for DeleteStudentResponse
   */
  export interface AsProtobufJSON {
    message?: string;
  }
}
