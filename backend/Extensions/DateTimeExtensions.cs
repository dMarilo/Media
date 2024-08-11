using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateOnly date)
        {
            var now = DateOnly.FromDateTime(DateTime.UtcNow);

            var age = now.Year - date.Year;

            if(date > now.AddYears(-age)) age--;
            return age;
        }
    }
}