using FinanceApi.Context;
using FinanceApi.Context.FinanceApi.Context;
using FinanceApi.Repositories.Implementations;
using FinanceApi.Repositories.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Registrar o MongoDbContext e os repositórios
builder.Services.AddScoped(typeof(IMongoDbContext<>), typeof(MongoDbContext<>));
builder.Services.AddScoped<ICadTagRepository, CadTagRepository>();
builder.Services.AddScoped<ICadContaRepository, CadContaRepository>();
builder.Services.AddScoped<IMovDespesaRepository, MovDespesaRepository>();
builder.Services.AddScoped<IMovReceitaRepository, MovReceitaRepository>();
builder.Services.AddScoped<ICadCartaoRepository, CadCartaoRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
{
    options.AllowAnyOrigin();
    options.AllowAnyHeader();
    options.AllowAnyMethod();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
