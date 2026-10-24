# Memory management
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across papers, the shared core is managing prior information over time: storing, retrieving, and updating earlier experiences or user-specific information so it can be used later. One paper frames this broadly as storing, retrieving, summarizing, and updating past experiences for later decisions, and describes memory as the foundation that accumulates historical experience for other modules; another gives a narrower conversational version, emphasizing accurate storage, retrieval, update, and deletion of user-specific information across turns and topic boundaries. The main variation is scope, broader past-experience management for decision-making versus cross-turn handling of conversational information.

**Space of facets.** Papers break the construct into memory operations rather than formal subtypes. Storage, retrieval, and update recur across definitions, with some usages adding summarization and others adding deletion; one paper also distinguishes information mentioned minutes earlier from information many turns earlier, and another describes a memory retriever that fetches historically relevant memories from internal memory. Information retrieval is also treated as related to memory management, in language that ties memory management to integrating and analyzing internal memory.

**Space of measurement.** Papers do not link memory management to any measurement instrument, and they link it to one behavioral indicator, Information retrieval, as a related behavior rather than a direct measure. Where the construct is made operational, one study probes whether a model can retrieve, add, overwrite, or delete information mentioned earlier despite an empty chat history, using access to a stored snapshot and spanning short-term and long-term earlier mentions; another instantiates it as recalling and integrating past negotiations and actions, with memory summarizing accumulated historical experience for other modules. These operationalizations follow the shared store, retrieve, and update core, while differing on whether deletion or summarization is included.

**Links.** Only a few explicit links are reported. One paper claims a causal relationship from memory management to self-improvement, arguing that a robust memory system lets an agent recall and integrate past negotiations and actions to support learning, improvement, and the ability to evolve; another paper reports that information retrieval is related to memory management, describing memory management as integrating and analyzing content from internal memory and using a retriever to fetch historically relevant memories.

## Sources

**[Richelieu: Self-Evolving LLM-Based Agents for AI Diplomacy](https://proceedings.neurips.cc/paper_files/paper/2024/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf)**
> The ability to store, retrieve, summarize, and update past experiences so they can inform later decisions.

## Relationships

### Memory management →
- **Self-improvement** (constructs) — *causes*
  > A robust memory system is a critical component of learning and improvement. The AI agent must be able to recall and integrate information from past negotiations and actions to inform its current and future decision-making processes. This endows the agent with the ability to evolve. (Section 1).
  - [Richelieu: Self-Evolving LLM-Based Agents for AI Diplomacy](https://proceedings.neurips.cc/paper_files/paper/2024/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf)

### Associated with
- **Information retrieval** (behaviors tasks)
  > “Memory management involves integrating and analyzing content from internal memory” and “Memory Retriever. Given the question q and the assistant’s memory M, the memory retriever retrieves historically relevant memories”
  - [Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf)
