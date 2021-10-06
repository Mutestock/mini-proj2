FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://*:5000

FROM mcr.microsoft.com/dotnet/sdk:5.0 as build
WORKDIR /src
COPY "./src/SoapService.csproj" "./"
RUN dotnet restore "SoapService.csproj"
COPY "./src" .
WORKDIR "/src/."
RUN dotnet build "SoapService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SoapService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT [ "dotnet", "SoapService.dll" ]