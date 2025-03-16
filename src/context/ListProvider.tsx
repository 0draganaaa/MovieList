import { createContext, useState, useEffect, ReactNode } from "react";
import listsService from "../services/listsService";
import { ListsContextType } from "./types";
import { IList, IListDetails, IListsMovies } from "../types/lists";
import { getToken } from "../utils/tokens";
import { mapMovies } from "../utils/movies";

export const ListContext = createContext<ListsContextType | undefined>(undefined);

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [lists, setLists] = useState<IList[]>([]);
  const [list, setList] = useState<IListsMovies | null>(null);

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
      await listsService.createList(list, getToken('sessionId') ?? undefined);
    } catch (error) {
      console.error("Error creating a list:", error);
    } finally {
      getLists();
    }
  }

  const removeList = async (listId: number) => {
    try {
      await listsService.deleteList(listId, getToken('sessionId') ?? undefined);
      
    } catch (error) {
      console.error('Error deleting the list:', listId);
    } finally {
      getLists();
    }
  }

  const addMovieToAList = async (listId: number, movieId: number) => {
    try {
      await listsService.addMovieToList(listId, movieId, getToken('sessionId') ?? undefined);
    } catch (error) {
      console.error('Error while adding a movie to a list');
    }
  }

  const getListContent = async (listId: number) => {
    try {
      const list = await listsService.getListContent(listId);

      const items = mapMovies(list.items, process.env.REACT_APP_IMAGES_BASE_PATH ?? ''); 
      const listWMovies: IListsMovies = {...list, items};

      setList(listWMovies);
    } catch (error) {
      console.error('Error while adding a movie to a list');
    }
  }

  const removeMovieFromTheList = async (listId: number, movieId: number) => {
    try {
      await listsService.removeMovieFromList(listId, movieId, getToken('sessionId') ?? undefined);
    } catch (error) {
      console.error('Error while adding a movie to a list');
    } finally {
      getListContent(listId);
    }
  }

  useEffect(() => {
    getLists();
  }, []);

  return (
    <ListContext.Provider 
      value={{lists, getLists, list, createList, removeList, addMovieToAList, getListContent, removeMovieFromTheList }}
    >
      {children}
    </ListContext.Provider>
  );
};
