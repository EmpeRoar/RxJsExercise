using Microsoft.EntityFrameworkCore.Migrations;

namespace BFF.EF.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "RxJsCoreExercise");

            migrationBuilder.CreateTable(
                name: "Category",
                schema: "RxJsCoreExercise",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                schema: "RxJsCoreExercise",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductCategoryLink",
                schema: "RxJsCoreExercise",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategoryLink", x => new { x.ProductId, x.CategoryId });
                    table.ForeignKey(
                        name: "FK_ProductCategoryLink_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalSchema: "RxJsCoreExercise",
                        principalTable: "Category",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ProductCategoryLink_Product_ProductId",
                        column: x => x.ProductId,
                        principalSchema: "RxJsCoreExercise",
                        principalTable: "Product",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductCategoryLink_CategoryId",
                schema: "RxJsCoreExercise",
                table: "ProductCategoryLink",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductCategoryLink",
                schema: "RxJsCoreExercise");

            migrationBuilder.DropTable(
                name: "Category",
                schema: "RxJsCoreExercise");

            migrationBuilder.DropTable(
                name: "Product",
                schema: "RxJsCoreExercise");
        }
    }
}
