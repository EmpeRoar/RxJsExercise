using Microsoft.EntityFrameworkCore.Migrations;

namespace BFF.EF.Migrations
{
    public partial class addNameProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                schema: "RxJsCoreExercise",
                table: "Product",
                maxLength: 255,
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                schema: "RxJsCoreExercise",
                table: "Product",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                schema: "RxJsCoreExercise",
                table: "Category",
                maxLength: 255,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                schema: "RxJsCoreExercise",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "Price",
                schema: "RxJsCoreExercise",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "Name",
                schema: "RxJsCoreExercise",
                table: "Category");
        }
    }
}
