using SoapService.Models;
using SoapService.Persistency;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Threading.Tasks;

namespace SoapService
{
    [ServiceContract]
    public interface ITeacherService
    {
        [OperationContract]
        void AddTeacher(Teacher teacher);
        [OperationContract]
        Teacher GetTeacher(int teacherId);
        [OperationContract]
        List<Teacher> GetAllTeachers();
        [OperationContract]
        void UpdateTeacher(int id, Teacher updatedData);
        [OperationContract]
        void DeleteTeacher(int id);
    }

    public class TeacherService : ITeacherService
    {
        private readonly ITeacherRepository _teacherRepository;

        public TeacherService(ITeacherRepository teacherRepository)
        {
            _teacherRepository = teacherRepository;
        }

        public void AddTeacher(Teacher teacher)
            => _teacherRepository.AddNew(teacher);

        public void DeleteTeacher(int id)
            => _teacherRepository.Delete(id);

        public List<Teacher> GetAllTeachers()
            => _teacherRepository.RetriveAll();

        public Teacher GetTeacher(int teacherId)
            => _teacherRepository.Retrive(teacherId);

        public void UpdateTeacher(int id, Teacher updatedData)
            => _teacherRepository.Update(id, updatedData);
    }
}
