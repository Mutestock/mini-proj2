using SoapService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoapService.Persistency
{
    public interface ITeacherRepository
    {
        Teacher Retrive(int id);
        void AddNew(Teacher teacher);
        List<Teacher> RetriveAll();
        void Delete(int id);
        void Update(int id, Teacher updatedTeacher);
    }
    public class TeacherRepository : ITeacherRepository
    {
        private readonly TeacherContext _context;

        public TeacherRepository(TeacherContext context)
        {
            _context = context;
        }
        public void AddNew(Teacher teacher)
        {
            DateTime currentTime = DateTime.Now;
            teacher.CreatedAt = currentTime;
            teacher.UpdatedAt = currentTime;
            _context.Teachers.Add(teacher);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            Teacher teacher = _context.Teachers.First(t => t.Id == id);
            _context.Teachers.Remove(teacher);
            _context.SaveChanges();
        }

        public Teacher Retrive(int id)
            => _context.Teachers.FirstOrDefault(t => t.Id == id);

        public List<Teacher> RetriveAll()
            => _context.Teachers.ToList();

        public void Update(int id, Teacher updatedTeacher)
        {
            Teacher oldTeacher = _context.Teachers.First(t => t.Id == id);
            oldTeacher.FirstName = updatedTeacher.FirstName;
            oldTeacher.LastName = updatedTeacher.LastName;
            oldTeacher.PhoneNumber = updatedTeacher.PhoneNumber;
            oldTeacher.Email = updatedTeacher.Email;
            oldTeacher.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
        }
    }
}
