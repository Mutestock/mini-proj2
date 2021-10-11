using Microsoft.EntityFrameworkCore;
using SoapService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoapService.Persistency
{
    public class SchoolClassContext: DbContext
    {
        public DbSet<SchoolClass> Classes { get; set; }
        public DbSet<Person> Persons { get; set; }

        public SchoolClassContext(DbContextOptions<SchoolClassContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<SchoolClass>(builder =>
            {
                builder.Property(c => c.Id).ValueGeneratedOnAdd();
                builder.HasMany(sc => sc.People).WithMany(p => p.Classes);
            });
            modelBuilder.Entity<Person>(builder =>
            {
                builder.HasData(new Person { Id = 1 });
                builder.HasMany(p => p.Classes).WithMany(c => c.People);
            });
        }
    }
}
