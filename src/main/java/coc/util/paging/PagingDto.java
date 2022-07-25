package coc.util.paging;

public class PagingDto {
	
	private final static int defaultViewData = 20;
	private final int viewData;
	private final int currentPage;
	private final String searchCondition;
	private final String searchValue;
	
	private PagingDto(ScrollPageingBulider bulider) {
		//필수값없으면 에러처리.
		
		this.currentPage = bulider.currentPage == 0 ? 1 : bulider.currentPage;
		this.viewData = bulider.viewData == 0 ? defaultViewData : bulider.viewData;
		this.searchCondition = bulider.searchCondition == null ? "" : bulider.searchCondition;
		this.searchValue = bulider.searchValue == null ? "" : bulider.searchValue;
	}
	
	public int getStartData() {
		return (currentPage - 1) * viewData + 1;
	}
	public int getEndData() {
		return currentPage * viewData;
	}

	public String getSearchCondition() {
		return searchCondition;
	}
	public String getSearchValue() {
		return searchValue;
	}

	static class ScrollPageingBulider{
		
		private int viewData;
		private int currentPage;
		private String searchCondition;
		private String searchValue;
		
		void setViewData(int viewData) {
			this.viewData = viewData;
		}
		void setCurrentPage(int currentPage) {
			this.currentPage = currentPage;
		}
		void setSearchCondition(String searchCondition) {
			this.searchCondition = searchCondition;
		}
		void setSearchValue(String searchValue) {
			this.searchValue = searchValue;
		}
		
		PagingDto bulid() {
			return new PagingDto(this);
		}
	}
}
