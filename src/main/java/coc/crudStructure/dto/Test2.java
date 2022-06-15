package coc.crudStructure.dto;

import java.util.ArrayList;
import java.util.List;

public class Test2<T extends  String> implements Test1<TestDtoImpl>{

	@Override
	public List<TestDtoImpl> Tests(TestDtoImpl testDto) {

		testDto.setTestInt(1);
		System.out.println((T.valueOf(testDto.toString())));

		return new ArrayList<TestDtoImpl>();

	}
}
