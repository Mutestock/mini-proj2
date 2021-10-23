CREATE TABLE "PersonSchoolClass" (
    "ClassesId"    INTEGER NOT NULL,
    "PeopleId"    INTEGER NOT NULL,
    CONSTRAINT "FK_PersonSchoolClass_People_PeopleId" FOREIGN KEY("PeopleId") REFERENCES "People"("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_PersonSchoolClass_Classes_ClassesId" FOREIGN KEY("ClassesId") REFERENCES "Classes"("Id") ON DELETE CASCADE,
    CONSTRAINT "PK_PersonSchoolClass" PRIMARY KEY("ClassesId","PeopleId")
);