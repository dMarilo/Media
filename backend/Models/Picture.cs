using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    [Table("Pictures")]
    public class Picture
    {
        public int Id { get; set; }
        public string ?Location { get; set; }
        public bool IsMain { get; set; }
        public string ?PublicId  { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

    }
}