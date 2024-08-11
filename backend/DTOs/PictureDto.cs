using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTOs
{
    public class PictureDto
    {
        public int Id { get; set; }
        public string ?Location { get; set; }
        public bool IsMain { get; set; }

    }
}