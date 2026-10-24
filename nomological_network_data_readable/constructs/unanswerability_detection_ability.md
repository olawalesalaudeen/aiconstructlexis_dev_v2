# Unanswerability detection ability
**Type:** Construct  
**Referenced in:** 8 papers  
**Also known as:** Answerability judgment, Unanswerability detection, Refusal capability, Alignment for answerability, Abstention  

## State of the Field

**Definition agreement:** Consensus. Most papers define this as a model's ability to recognize that the available source or context does not contain enough information to answer a question, and to mark it as unanswerable by abstaining or saying it is unknown. The differences are mainly the setting and examples used, such as databases, documents, retrieved passages, videos, or interaction history, with a few papers putting slightly more emphasis on abstention or incomplete problems rather than changing the core construct.

**Space of definitions.** Most definitions treat this construct as the ability to judge whether the available context contains enough information to answer a question, or whether the question is unanswerable. The definitions instantiate that judgment in several settings: databases where "a valid SQL cannot be produced given the database schema" or the data is missing, documents where a model predicts whether a question is answerable, retrieved evidence that may lack sufficient information, video content whose informational boundaries a question may exceed, and interaction histories where the sought fact was never mentioned. A smaller line of work foregrounds refusal or abstention, defining the construct as choosing not to answer, or saying "I don't know," when insufficiency is detected; another definition describes it as recognizing flawed or incomplete problems and choosing not to answer.

**Space of facets.** Rather than a shared subtype taxonomy, papers describe context-specific versions of the construct according to what makes a question unanswerable: missing database data, columns, or join paths, insufficient document evidence, queries beyond a video's content, information absent from interaction history, and flawed or incomplete multimodal problems. Naming is not fully uniform: closely related uses appear under unanswerability detection, answerability judgment, refusal capability, alignment for answerability, and abstention. One paper also uses "alignment for answerability" for the process of equipping video models with the ability to evaluate question relevance based on video content, and one multimodal paper distinguishes refusal capability from visual understanding as separate possible bottlenecks.

**Space of measurement.** Papers link the construct to 3 measurement instruments, ASQA, ELI5, and QAMPARI, and to no behavioral indicators. In the only linked measurement evidence, one paper evaluates it on these datasets with F1GR, defined there as Grounded Refusals F1, so the operationalization targets whether the model produces grounded refusals when documents lack sufficient information. This dataset-based operationalization matches the refusal and document-sufficiency framing most directly, while papers do not link this construct here to instruments for the database, video, or interaction-history variants named in the definitions.

**Links.** Beyond measurement, no papers claim a causal, correlational, or related link between this construct and another construct.

## Sources

**[PRACTIQ: A Practical Conversational Text-to-SQL dataset with Ambiguous and Unanswerable Queries](https://aclanthology.org/2025.naacl-long.13.pdf) (as "Unanswerability detection")**
> The latent ability of a model to determine when a question cannot be answered due to missing data, columns, or join paths in the database.

**[PeerQA: A Scientific Question Answering Dataset from Peer Reviews](https://aclanthology.org/2025.naacl-long.22.pdf) (as "Answerability judgment")**
> The latent ability to determine whether sufficient information exists in a given document to answer a question, distinguishing answerable from unanswerable queries.

**[Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf) (as "Refusal capability")**
> The tendency of an LLM to abstain from answering when the retrieved documents do not contain sufficient information.

**[Can Video LLMs Refuse to Answer? Alignment for Answerability in Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d77402f07113388562f5b51eaee89573-Paper-Conference.pdf) (as "Alignment for answerability")**
> The latent capability of a model to evaluate the relevance of user queries in relation to video content and appropriately decline to answer when questions exceed the video's informational boundaries.

**[LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://proceedings.iclr.cc/paper_files/paper/2025/file/d813d324dbf0598bbdc9c8e79740ed01-Paper-Conference.pdf) (as "Abstention")**
> The ability to identify when a question seeks information that was not provided in the interaction history and to correctly respond by indicating the information is unknown.

## Relationships

### Unanswerability detection ability →
- **ASQA** (measurements) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... F1GR := Grounded Refusals F1 (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **QAMPARI** (measurements) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... F1GR := Grounded Refusals F1 (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
- **ELI5** (measurements) — *measured_by*
  > Table 2: LLaMA family evaluated on the ASQA, QAMPARI, and ELI5 datasets. ... F1GR := Grounded Refusals F1 (Table 2)
  - [Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf)
