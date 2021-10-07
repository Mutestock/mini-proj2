from abc import ABC, abstractmethod


class AbstractEntity(ABC):

    @abstractmethod
    def create_table(self) -> None:
        pass

    @abstractmethod
    def insert_query(self) -> None:
        pass
