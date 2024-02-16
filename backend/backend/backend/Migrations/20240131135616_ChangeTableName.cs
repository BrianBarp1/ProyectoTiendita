using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class ChangeTableName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_backend",
                table: "backend");

            migrationBuilder.RenameTable(
                name: "backend",
                newName: "Libro");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Libro",
                table: "Libro",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Libro",
                table: "Libro");

            migrationBuilder.RenameTable(
                name: "Libro",
                newName: "backend");

            migrationBuilder.AddPrimaryKey(
                name: "PK_backend",
                table: "backend",
                column: "Id");
        }
    }
}
