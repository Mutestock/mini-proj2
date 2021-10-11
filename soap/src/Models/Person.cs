using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace SoapService.Models
{
    [DataContract]
    public class Person
    {
        [DataMember]
        public int Id { get; set; }
        public List<SchoolClass> Classes { get; set; } = new List<SchoolClass>();
    }
}
