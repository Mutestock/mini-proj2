using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SoapService.Models;

namespace SoapService.Persistency
{
    public class TeacherContext: DbContext
    {
        public DbSet<Teacher> Teachers { get; set; }

        public TeacherContext(DbContextOptions<TeacherContext> options)
            : base(options) { }
    }
}