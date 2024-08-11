using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    public class ErrorController : BaseApiController
    {
        private readonly DataContext _context;
        public ErrorController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetAuth()
        {
            return "something";
        }
        [HttpGet("not-found")]
        public ActionResult<User> GetNotFound()
        {
            var noUser = _context.Users.Find(-1);
            if(noUser == null) return NotFound();
            return noUser;
        }
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var noUser = _context.Users.Find(-1);

            var returner = noUser.ToString();

            return returner;
        }
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("This was a bad request");
        }
    }
}