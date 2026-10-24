# Web search
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Web content retrieval  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats web search as an observable tool-use action in which the model generates a query and invokes a search tool or search API to retrieve information or a list of webpages from a live search engine for answering a question. Definitions mostly agree on the query-and-retrieval step, though one formulation extends the behavior beyond the results list to following results, fetching HTML pages, extracting relevant text, and synthesizing an answer. Concrete descriptions include generating a JSON-formatted request to a web_search tool and sending structured search queries through web search APIs.

**Variants.** Papers use both the label web search and the label web content retrieval. The behavior appears in general question answering, in complicated web browsing to answer a question, and in searches for time-sensitive or source-specific information. Examples include Google search, a GoogleSearch tool, and site-specific search such as searching BBC Good Food for recipes and ingredient lists.

**Space of elicitation and scores.** No measurement instrument is linked to it. Operationally, papers make the behavior visible through explicit tool use, such as JSON-formatted requests to a web_search tool or structured queries sent to search engines via web search APIs, and one paper notes that the web search tool is the most commonly used tool in its setting.

**What it is taken as evidence of.** No construct is linked to it. The papers describe it directly as a search and retrieval behavior.

## Sources

**[DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf)**
> The action of invoking a search tool with a generated query to retrieve a list of webpages from a live search engine.

**[Web Intellectual Property at Risk: Preventing Unauthorized Real-Time Retrieval by Large Language Models](https://aclanthology.org/2025.emnlp-main.870.pdf) (as "Web content retrieval")**
> Observable behavior in which the LLM uses search APIs to retrieve and process HTML content from webpages relevant to a user query for response generation.
