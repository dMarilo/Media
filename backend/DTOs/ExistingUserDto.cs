using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;

namespace backend.DTOs
{
    public class ExistingUserDto
    {
        public int Id { get; set; }
        public string ?PictureUrl { get; set; }
        public string ?Username { get; set; }
        public string ?Bio { get; set; }
        public string ?FirstName { get; set; }
        public string ?LastName { get; set; }
        public string ?Email { get; set; }
        public string ?Nickname { get; set; }
        public string ?Gender { get; set; }
        public string ?Interests { get; set; }
        public string ?LookingFor { get; set; }
        public string ?Location { get; set; }
        public string ?Country { get; set; }
        public int Age { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastActiveAt { get; set; }
        public List<PictureDto> Pictures { get; set; }
    }
}