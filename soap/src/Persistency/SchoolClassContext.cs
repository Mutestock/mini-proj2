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

        public SchoolClassContext(DbContextOptions<SchoolClassContext> options)
            : base(options) { }
    }
}
