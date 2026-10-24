# Groundedness
**Type:** Construct  
**Referenced in:** 12 papers  
**Also known as:** Argument groundedness, Factual reliability  

## State of the Field

**Definition agreement:** Consensus. Most papers define groundedness as the extent to which a model's response or argument is anchored in provided or retrieved external evidence and is verifiable against it, rather than being unsupported or hallucinatory. A few vary the scope slightly by emphasizing document-only reliance, consistency with evidence, or the retrieval and reasoning process, but they are still studying the same core property of evidence-based outputs.

**Space of definitions.** Across papers, groundedness is most commonly framed as the degree to which a model response or output comes from provided or retrieved evidence, rather than unsupported internal knowledge, and can be verified against that evidence. Several definitions make this strict by saying the answer should use only the attached documents and that its claims should be supported, sometimes inferable, from inline citations. Smaller variants narrow the construct to generated arguments, defining it as factual support and consistency with retrieved evidence, or shift it to the retrieval and reasoning process itself as avoidance of hallucinated or factually inaccurate content through document-grounded knowledge; definitions also vary in source, from only provided documents to broader verifiable external knowledge such as retrieved context, contract content, or external legal sources.

**Space of facets.** In these papers, the idea is used at several scopes: groundedness for responses or outputs, argument groundedness for generated arguments, and factual reliability for a document-grounded retrieval and reasoning process. Some authors therefore use adjacent labels for closely related notions rather than a single uniform term. Across these uses, the recurring contrasts are with reliance on parametric knowledge, contradiction with retrieved evidence, unsupported claims, and plausible-sounding but non-factual content.

**Space of measurement.** No measurement instrument is linked to groundedness. It is linked to 3 behavioral indicators, most often Hallucination, then Chain of thought and Relation extraction. Papers nevertheless make it observable by asking whether responses use only attached documents, whether claims can be supported or inferred from inline citations, whether generated arguments are supported and consistent with retrieved evidence, and, in one description, through a human study of grounded justifications; this mostly follows the dominant evidence-support framing, though one paper applies the idea to the retrieval and reasoning process.

**Links.** Groundedness is related to Hallucination in more than one paper: one asks whether groundedness predictions detect argument hallucinations, and another notes susceptibility to outputs that appear plausible but are factually incorrect. Separately, one paper claims a causal relationship from Relation extraction to Groundedness by decomposing documents into knowledge triples for a factually reliable retrieval process, and the same paper claims a causal relationship from Chain of thought to Groundedness by replacing free-form thoughts with document-grounded knowledge triples.

## Sources

**[Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)**
> The extent to which an LLM's response is derived solely from the information within provided documents rather than its internal parametric knowledge.

**[ConQRet: A New Benchmark for Fine-Grained Automatic Evaluation of Retrieval Augmented Computational Argumentation](https://aclanthology.org/2025.naacl-long.293.pdf) (as "Argument groundedness")**
> The extent to which a generated argument is factually supported by and consistent with the retrieved evidence, minimizing hallucination or contradiction.

**[KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf) (as "Factual reliability")**
> The degree to which the retrieval and reasoning process avoids hallucinated or factually inaccurate content by grounding in document-derived knowledge.

## Relationships

### Groundedness →
- **AlignScore** (measurements) — *measured_by*
  > Besides human evaluation of the above, we also computed groundedness as faithfulness to the input chain in terms of Alignscore (Zha et al., 2023). (Section 4)
  - [HypER: Literature-grounded Hypothesis Generation and Distillation with Provenance](https://aclanthology.org/2025.emnlp-main.1292.pdf)

### → Groundedness
- **Chain of thought** (behaviors tasks) — *causes*
  > ...we instruct the LLM to generate a chain-of-knowledge (CoK) (Wang et al., 2024a), where free-form thoughts are replaced with document-grounded knowledge triples to ensure factual reliability. (Section 3.2)
  - [KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > Do groundedness predictions detect argument hallucinations? (Section 6.3)
  - [ConQRet: A New Benchmark for Fine-Grained Automatic Evaluation of Retrieval Augmented Computational Argumentation](https://aclanthology.org/2025.naacl-long.293.pdf)
