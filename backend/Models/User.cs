using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Extensions;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; } //
        public string ?Username { get; set; } //
        public byte[] ?PasswordHash { get; set; } //
        public byte[] ?PasswordSalt { get; set; } //
        public string ?Bio { get; set; } //
        public string ?FirstName { get; set; } //
        public string ?LastName { get; set; } //
        public string ?Email { get; set; }
        public string ?Nickname { get; set; } //
        public string ?Gender { get; set; } //
        public string ?Interests { get; set; } //
        public string ?LookingFor { get; set; } //
        public string ?Location { get; set; } //
        public string ?Country { get; set; } //
        public DateOnly Birthday { get; set; } //
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; //
        public DateTime LastActiveAt { get; set; } = DateTime.UtcNow; //
        public List<Picture> Pictures { get; set; } = new(); //

        public int GetAge()
        {
            return Birthday.CalculateAge();
        }
    }
    
}