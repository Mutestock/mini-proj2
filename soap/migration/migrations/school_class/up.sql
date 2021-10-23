CREATE TABLE "Classes" (
    "Id"    INTEGER NOT NULL,
    "Subject"    TEXT,
    "CreatedAt"    TEXT NOT NULL,
    "UpdatedAt"    TEXT NOT NULL,
    CONSTRAINT "PK_Classes" PRIMARY KEY("Id" AUTOINCREMENT)
);

CREATE TABLE "People" (
    "Id"    INTEGER NOT NULL,
    CONSTRAINT "PK_People" PRIMARY KEY("Id" AUTOINCREMENT)
);

CREATE TABLE "PersonSchoolClass" (
    "ClassesId"    INTEGER NOT NULL,
    "PeopleId"    INTEGER NOT NULL,
    CONSTRAINT "FK_PersonSchoolClass_People_PeopleId" FOREIGN KEY("PeopleId") REFERENCES "People"("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_PersonSchoolClass_Classes_ClassesId" FOREIGN KEY("ClassesId") REFERENCES "Classes"("Id") ON DELETE CASCADE,
    CONSTRAINT "PK_PersonSchoolClass" PRIMARY KEY("ClassesId","PeopleId")
);