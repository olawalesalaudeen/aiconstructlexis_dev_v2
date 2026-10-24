# Associative recall ability
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Associative recall, Associative memory retrieval  

## State of the Field

**Definition agreement:** Conflicting. Most papers define associative recall ability as locating and extracting relevant information from a long current context or context memory, but several others use it for recalling facts stored in pre-trained parameters, and a smaller group for retrieving from external corpora or knowledge stores. These are different targets and settings of retrieval rather than the same phenomenon, so papers using these definitions would often not be studying the same thing, with an additional outlier about poison-sample retrievability.

**Space of definitions.** Most definitions treat the concept as a retrieval ability: given a cue, query, or associated prompt, the model locates and returns matching information. Some authors use a narrow version centered on retrieving a specific value from its associated cue, while others describe a broader associative-memory process that retrieves the most relevant stored pattern or knowledge through similarity-based matching. The definitions also vary in where the target information is assumed to reside, including earlier tokens in context, long documents, model parameters, or external corpora.

**Space of facets.** Papers place this construct within a broader family of retrieval notions rather than a single settled subtype system. Nearby labels include in-context retrieval, information retrieval, and knowledge retrieval, and some papers further distinguish long-context retrieval, task vector retrieval, causal retrieval, and parametric knowledge retrieval. Across these usages, the main dividing line is what is being retrieved, such as earlier sequence items, factual knowledge from pre-training, high-level task vectors, or chunks and documents, and one paper uses a related term for the retrievability property of a poison sample rather than a model ability.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to the construct. Still, papers discuss it through task settings such as associative recall, in-context retrieval tasks, Needle-in-a-Haystack testing, and long-context retrieval scenarios, and some descriptions vary corpus size until a retriever is necessary. In these uses, success is framed as locating or recalling the requested token, answer, or document from context, memory, model parameters, or a document collection.

**Links.** No papers claim a causal relationship, correlation, or other related link involving this construct. The papers that mention it focus on describing retrieval abilities and variants rather than linking it to another entity.

## Sources

**[Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf) (as "Associative recall")**
> The ability to retrieve a specific value when prompted with its associated key.

**[In-Context Learning as Conditioned Associative Memory Retrieval](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25k/wu25k.pdf) (as "Associative memory retrieval")**
> The latent capacity of a model to retrieve stored patterns or knowledge by matching a query to the most relevant memory through similarity-based dynamics, akin to Hopfield network behavior.

## Relationships

### Associative recall ability →
- **MQAR** (measurements) — *measured_by*
  > The model’s recall capability is assessed using the MQAR Task (See Appendix D.7), as described in Arora et al. (2024a). (Figure 1)
  - [Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf)
- **SWDE** (measurements) — *measured_by*
  > “Recall” represents the average performance across FDA, SWDE, and SQuAD. (Table 7)
  - [Scaling up the State Size of RNN LLMs for Long-Context Scenarios](https://aclanthology.org/2025.acl-long.564.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > “Recall” represents the average performance across FDA, SWDE, and SQuAD. (Table 7)
  - [Scaling up the State Size of RNN LLMs for Long-Context Scenarios](https://aclanthology.org/2025.acl-long.564.pdf)
