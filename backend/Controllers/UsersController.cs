using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.Data;
using backend.DTOs;
using backend.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace backend.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUSerRepository _uSerRepository;
        private readonly IMapper _mapper;
        public UsersController(IUSerRepository uSerRepository, IMapper mapper)
        {
            _mapper = mapper;
            _uSerRepository = uSerRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _uSerRepository.GetUsersAsync();
            var usersToReturn = _mapper.Map<IEnumerable<ExistingUserDto>>(users);
            return Ok(usersToReturn);
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<ExistingUserDto>> GetUSer(string username)
        {
            var user = await _uSerRepository.GetUSerByUSernameAsync(username);
            return _mapper.Map<ExistingUserDto>(user);
        }
    }
}