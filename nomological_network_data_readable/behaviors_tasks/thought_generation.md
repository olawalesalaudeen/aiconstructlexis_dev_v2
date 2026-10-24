# Thought generation
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

Producing a compact summary of retrieved information to maintain context across iterations in multi-hop reasoning.

## Sources

**[ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)**
> Producing a compact summary of retrieved information to maintain context across iterations in multi-hop reasoning.

## Relationships

### Thought generation →
- **Text generation** (behaviors tasks) — *causes*
  > Through preference optimization the thoughts are then optimized to improve the resulting responses (Section 2.2).
  - [Thinking LLMs: General Instruction Following with Thought Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25o/wu25o.pdf)

### Associated with
- **Query rewriting** (behaviors tasks)
  > Thought-concat appends the current thought t(i) to the query, constructing the updated query as q(i+1) = [t(i); q(i)], where [a; b] denotes the concatenation of a and b. (Section 4.2.4)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
