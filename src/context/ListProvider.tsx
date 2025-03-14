import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import listsService from "../services/listsService";
import { AuthContextType, ListsContextType } from "./types";
import { AuthContext } from "./AuthProvider";
import { IList, IListDetails } from "../types/lists";
import { getToken } from "../utils/tokens";

export const ListContext = createContext<ListsContextType | undefined>(undefined);

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [lists, setLists] = useState<IList[]>([]);

  const authCntx = useContext(AuthContext);

  const getLists = async () => {
    try {
      const response = await listsService.fetchLists();
      setLists(response.data.results)
    } catch (error) {
      console.error("Error fetching lists:", error);
    }
  };

  const createList = async (list: IListDetails) => {
    try {
      const sessionId = authCntx?.sessionId;
      await listsService.createList(list, getToken('sessionId') ?? undefined);
      getLists();
    } catch (error) {
      console.error("Error creating a list:", error);
    }
  }

  const removeList = async (listId: number) => {
    try {

    } catch (error) {
      console.error('Error deleting the list:', listId);
    }
  }

  useEffect(() => {
    getLists();
  }, []);

  return (
    <ListContext.Provider value={{ lists, createList }}>
      {children}
    </ListContext.Provider>
  );
};
