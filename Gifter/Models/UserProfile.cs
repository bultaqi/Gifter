﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Gifter.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        public string ImageUrl { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }
        public int UserTypeId { get; internal set; }
        public UserType UserType { get; internal set; }
    }
}