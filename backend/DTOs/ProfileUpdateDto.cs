using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTOs
{
    public class ProfileUpdateDto
    {
        public string ?Bio { get; set; }
        public string ?LookingFor { get; set; }
        public string ?Interests { get; set; }
        public string ?Location { get; set; }
        public string ?Country { get; set; }
    }
}