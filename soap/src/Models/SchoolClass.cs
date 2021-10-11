using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace SoapService.Models
{
    [DataContract, Table("Classes")]
    public class SchoolClass
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Subject { get; set; }
        [DataMember]
        public DateTime CreatedAt { get; set; }
        [DataMember]
        public DateTime UpdatedAt { get; set; }
        [DataMember]
        public List<Person> People { get; set; } = new List<Person>();
    }
}
