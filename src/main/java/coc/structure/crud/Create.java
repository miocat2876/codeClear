package coc.structure.crud;

import coc.structure.dto.CrudDto;

public interface Create<T>  {
	int create(T t);
}
