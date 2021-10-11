using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoapService.Models;

namespace SoapService.Persistency
{
    public interface IClassRepository
    {
        SchoolClass Get(int id);
        List<SchoolClass> Get();
        int CreateNew(SchoolClass schoolClass);
        void AddPeople(int classId, params Person[] people);
    }

    public class ClassRepository: IClassRepository
    {
        private readonly SchoolClassContext _context;

        public ClassRepository(SchoolClassContext context)
        {
            _context = context;
        }


        public SchoolClass Get(int id)
            => _context.Classes.Include(c => c.People).FirstOrDefault(c => c.Id == id);

        public List<SchoolClass> Get()
            => _context.Classes.ToList();

        public int CreateNew(SchoolClass schoolClass)
        {
            DateTime currentTime = DateTime.Now;
            schoolClass.CreatedAt = currentTime;
            schoolClass.UpdatedAt = currentTime;
            _context.Classes.Add(schoolClass);
            _context.SaveChanges();

            return schoolClass.Id;
        }

        public void AddPeople(int classId, params Person[] people)
        {
            SchoolClass schoolClass = _context.Classes.Include(c => c.People).First();

            foreach(Person p in people)
                if(schoolClass.People.All(x => x.Id != p.Id))
                    schoolClass.People.Add(p);

            schoolClass.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
        }
    }
}
