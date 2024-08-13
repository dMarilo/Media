using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.DTOs;
using backend.Models;

namespace backend.help
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, ExistingUserDto>().ForMember(destionation => destionation.PictureUrl, option => option.MapFrom(src => src.Pictures.FirstOrDefault(x => x.IsMain).Location));
            CreateMap<Picture, PictureDto>();
            CreateMap<ProfileUpdateDto, User>();
        }
    }
}