using FinanceApi.Context;
using FinanceApi.Context.FinanceApi.Context;
using FinanceApi.Infra.Encrypt;
using FinanceApi.Repositories.Implementations;
using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.Text;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

StringBuilder GetInitialMessage()
{
    StringBuilder builder = new();
    return builder
        .AppendLine(value: "Application: Finance  API - Ver. 1.0")
        .AppendLine(value: "Development mode.");
}
JwtSettings GetJwtSettings()
{
    JwtSettings? jwtSettings = configuration.GetSection(key: "Authentication").Get<JwtSettings>();
    return jwtSettings ?? throw new Exception(message: "JWT Secrets is empty");
}

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
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IMovTransferenciaRepository, MovTransferenciaRepository>();

JwtSettings jwtSettings = GetJwtSettings();
jwtSettings.SecretKey = SecretKeyGenerator.GenerateSecretKey();

builder.Services.AddSingleton(jwtSettings);
builder.Services
    .AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddCookie()
    .AddJwtBearer(configureOptions: options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key: Encoding.UTF8.GetBytes(s: jwtSettings.SecretKey))
        };
    });

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

app
  .UseRouting()
  .UseHttpsRedirection()
  .UseAuthentication()
  .UseAuthorization()
  .UseEndpoints(configure: end =>
  {
      end.MapDefaultControllerRoute();
      end.MapControllers().RequireAuthorization(authorizeData: new AuthorizeAttribute());
  });

app.Run();