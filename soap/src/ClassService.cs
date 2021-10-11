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
    public interface IClassService
    {
        [OperationContract]
        int CreateNewClass(string classSubject);
        [OperationContract]
        SchoolClass GetClass(int teacherId);
        [OperationContract]
        List<SchoolClass> GetAllClasses();
        [OperationContract]
        void AddPersonClass(int classId, int personId);
        [OperationContract]
        void AddPeopleClass(int classId, params int[] peopleIds);
    }

    public class ClassService : IClassService
    {
        private readonly IClassRepository _repository;

        public ClassService(IClassRepository repository)
        {
            _repository = repository;
        }

        public int CreateNewClass(string classSubject)
            => _repository.CreateNew(new() {Subject = classSubject});

        public SchoolClass GetClass(int teacherId)
            => _repository.Get(teacherId);

        public List<SchoolClass> GetAllClasses()
            => _repository.Get();

        public void AddPersonClass(int classId, int personId)
            => _repository.AddPeople(classId, new Person { Id = personId });

        public void AddPeopleClass(int classId, params int[] peopleIds)
            => _repository.AddPeople(classId, peopleIds.Select(pId => new Person { Id = pId}).ToArray());
    }
}
