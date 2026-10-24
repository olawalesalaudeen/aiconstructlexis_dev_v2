# Information preservation
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Information retention  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Papers are split between two framings rather than using a single prevailing one. One paper defines it as the extent to which an encoder's embeddings retain enough content for an LLM to recover the original input or a downstream signal. Another, under the closely related name information retention, defines it as the degree to which an LLM preserves and transmits its full belief distribution across communication steps rather than discarding uncertainty through discrete token selection, and explicitly says the token sampling step "poses a potential risk of information loss" because it uses one token to represent belief over the vocabulary (Let Models Speak Ciphers: Multiagent Debate through Embeddings). The disagreement is therefore both about where the property resides, embeddings versus communication steps, and about what is preserved, recoverable content versus the model's full belief distribution and uncertainty.

**Space of facets.** The main pattern is terminological rather than taxonomic. Papers use both information preservation and information retention, but the associated definitions do not fully align: one centers reconstructability from embeddings, while the other centers preservation of uncertainty during communication. In the communication-focused usage, the paper also notes that this form of communication "still remains interpretable to humans via nearest neighbor search over the vocabulary."

**Space of measurement.** Operationalization is sparse. The papers do not link the construct to a named measurement instrument or behavioral indicator. One paper, Vector-ICL: In-context Learning with Continuous Vector Representations, evaluates it with a text reconstruction task, described as "a proxy for the amount of information preserved in the embeddings," and says this analysis is performed across 5 datasets and 3 LLMs. This proxy lines up directly with the embedding-focused definition, while the communication-focused framing is discussed in terms of information loss from token sampling and retention "during the moments of uncertainty" rather than through a linked instrument.

## Sources

**[Vector-ICL: In-context Learning with Continuous Vector Representations](https://proceedings.iclr.cc/paper_files/paper/2025/file/46516c4204d6cab8299e55d4ebf7ccec-Paper-Conference.pdf)**
> The extent to which an encoder’s embeddings retain enough content for an LLM to recover the original input or downstream signal.

**[Let Models Speak Ciphers: Multiagent Debate through Embeddings](https://proceedings.iclr.cc/paper_files/paper/2024/file/e444859b2a22df6b56af9381ad1e9480-Paper-Conference.pdf) (as "Information retention")**
> The degree to which an LLM preserves and transmits its full belief distribution across communication steps, rather than discarding uncertainty through discrete token selection.
