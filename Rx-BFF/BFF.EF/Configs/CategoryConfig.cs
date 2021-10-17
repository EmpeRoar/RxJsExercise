using BFF.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace BFF.EF.Configs
{
    public class CategoryConfig : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.ToTable("Category", Constant.DEFAULT_SCHEMA);
            builder.HasKey(k => new { k.Id });
            builder.Property(p => p.Name).HasMaxLength(255);
        }
    }
}
