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
        void CreateNewClass(SchoolClass teacher);
        [OperationContract]
        SchoolClass GetClass(int teacherId);
        [OperationContract]
        List<SchoolClass> GetAllClasses();
        [OperationContract]
        void AddPersonClass(int personId, int classId);
    }

    public class ClassService : IClassService
    {

        public ClassService()
        {
        }


        public void CreateNewClass(SchoolClass teacher)
        {
            throw new NotImplementedException();
        }

        public SchoolClass GetClass(int teacherId)
        {
            throw new NotImplementedException();
        }

        public List<SchoolClass> GetAllClasses()
        {
            throw new NotImplementedException();
        }

        public void AddPersonClass(int personId, int classId)
        {
            throw new NotImplementedException();
        }
    }
}
